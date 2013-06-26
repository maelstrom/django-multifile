#!/usr/bin/env python
"""
Install django-multifile using setuptools
"""

from multifile import __version__

try:
    from setuptools import setup, find_packages
except ImportError:
    from ez_setup import use_setuptools
    use_setuptools()
    from setuptools import setup, find_packages

setup(
    name='django-multifile',
    version=".".join(map(str, __version__)),
    description='Re-usable Django app for accepting multiple files in form fields.',
    author='Tim Heap',
    author_email='heap.tim@gmail.com',
    url='https://github.com/maelstrom/django-multifile',

    install_requires=['Django>=1.4'],
    zip_safe=False,

    packages=find_packages(),

    include_package_data=True,
    package_data={ },

    classifiers=[
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Framework :: Django',
    ],
)
