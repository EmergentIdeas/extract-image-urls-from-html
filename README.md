# extract-image-urls-from-html

Extracts image urls from source elements, either form the src or srcset attribute

## Command Line Invocation

This can be invoked on the command line as well.

> extract-image-urls-from-html /path/to/file

Reads /path/to/file and quotes the text in it, writing to stdout.

> extract-image-urls-from-html -

Reads from stdin, quotes the text in it, writing to stdout.

> extract-image-urls-from-html

Reads from stdin, quotes the text in it, writing to stdout. Useful for allowing
keyboard input and getting the transformed input back.
