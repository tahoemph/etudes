from itertools import takewhile
import requests

def next_page(base_url):
    next = 0
    while True:
        url = '{}/numbers?start={}'.format(base_url, next)
        data = requests.get(url)
        next = data.json()['More']
        yield data

def structure_page_data(pages):
    for page in pages:
        yield page.json()['Data']

def next_entry(page_data):
    for data in page_data:
        for datum in data:
            yield datum

def construct_iterator():
    return next_entry(structure_page_data(next_page('http://127.0.0.1:8000')))

for entry in takewhile(lambda value: value < 43, construct_iterator()):
    print entry
