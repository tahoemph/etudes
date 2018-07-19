This directory contains how APIs can be walked in Python 2.
This uses Python 2 in a straightforward way that doesn't do
the HTTP requests asycronously.  The idea here is to show
what a clean interface looks like.  We will reserve doing
more for Python 3.

This version walk goes out of its way to demonstrate how
once can construct various iterators together as a stack
of software.  This can be used to separate concerns from
getting the data, to formatting what is returned, to choosing
what entries to iterate over.
