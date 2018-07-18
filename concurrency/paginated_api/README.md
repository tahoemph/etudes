Paginated API
=============

Walking APIs takes a different form depending on the language.  The basic
concern is that you be able to block as you fetch each page.

From a code structure standpoint it would be useful if the code using
the data wasn't concerned with pagination.  It would like to slurp
up entries as needed and not mix the async nature of walking the API
with its own concerns.  In pseudocode the caller would like to
do something like:

```
while i_need_more and there_is_more_data():
	data = get_some_data(N)
	...use the data...
	i_need_more = do_i_need_more()
```

Using the data can be entirly async or syncronous.  In the simpliest
case we are just walking each entry returned from the API independent
of pagination.

This the underlying layers to read head in an effective manner or block
when necessary.

My original interest in this was driven by trying to use javascript
iterators.  I was use to being able to stack python iterators and
without javascript async iterators (which came later) I couldn't
figure out how to do this.  So I set out to see how interesting
languages could be made to achieve this end.

The stack of iterators came out of wanting to separate the concern
of walking the API page by page and the concern of returning individual
entries while still allowing for read head optimization.
