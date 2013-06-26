Django MultiFile
================

This is a Django app that provides simple support for multiple-file input
fields in Django forms. This makes it easier to keep all your validation and
handling code in the form class.

It is a fork of [Thomas Sutton's django-multifile app][1], modified to not use
jQuery, amongst other things.

Installing
----------

Install this app using `pip`. Then, make sure it is included in your
`INSTALLED_FILES`. This is required so that the `js/multifile.js` script can be
included in the page.

Usage
-----

Using this is pretty simple: just import `multifile.forms.MultiFileField` and
use it in a form!

    # forms.py
    from django import forms
    from multifile.forms import MultiFileField

    class UploadForm(forms.Form):
        files = MultiFileField()



    {# template.html #}
    {{ form.media }}
    {{ form }}

License
-------

Same as the licence on [the parent project][1]. That licence is ambiguous, and
this project no longer relies upon the mentioned projects, so I am not sure
what happens with the license.

I release as much as I am allowed to release of this work to the public domain.

[1]: http://github.com/thsutton/
