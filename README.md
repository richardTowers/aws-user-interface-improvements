aws-user-interface-improvements
===============================

A browser extenstion which makes some tweaks to the AWS console user interface
to make it a bit more usable.

For example, if you sign in with a federated login, it will try to show you the
important bits (like which role and account you're in) instead of the garbage AWS
shows by default.

Installation
------------

### For Chrome:

1. [Download the source from GitHub](https://github.com/richardTowers/aws-user-interface-improvements/archive/main.zip) and unzip.
2. Visit [chrome://extensions](chrome://extensions) in your browser.
3. Ensure that the Developer mode checkbox in the top right-hand corner is checked.
4. Click `Load unpacked extension…` to pop up a file selection dialog.
5. Navigate to `src` in the extension directory, and select it.
6. Visit any page in the AWS console

Source: [Getting Started: Building a Chrome Extension](https://developer.chrome.com/extensions/getstarted#unpacked).

### For Firefox:

Extensions installed using the following instructions are only active while Firefox
is open and are removed on exit. Permanently-active extensions can be only be
installed from packages signed by Mozilla.

1. [Download the source from GitHub](https://github.com/richardTowers/aws-user-interface-improvements/archive/main.zip) and unzip.
2. Visit [about:debugging](about:debugging) in your browser.
4. Click `Load Temporary Add-on` to pop up a file selection dialog.
5. Navigate to `src` in the extension directory, and select `manifest.json`.
6. Visit any page in the AWS console

Source: [Temporary installation in Firefox](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox).
