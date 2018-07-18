This directory contains how we walked APIs before iterator
support.  What we do here is have a custom interface that
doesn't interact with our looping constructs.  Given that
it doesn't make sense to talk about stacking these in
the sense of this etude although they could be stacked.
But by constructing a protocol that is specific to this
specific implementation that allows one iterator to
pull from the next.
