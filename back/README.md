## Installation

`git clone git@github.com:phgumao/crud-est-gio.git` then `composer install`

## Setup

Copy `env` to `.env` and tailor for your app, specifically the baseURL
and any database settings.

- Execute `php spark migrate` to run migration
- Execute `php spark serve` to run api server

## Server Requirements

PHP version 7.3 or higher is required, with the following extensions installed:

- [intl](http://php.net/manual/en/intl.requirements.php)
- [libcurl](http://php.net/manual/en/curl.requirements.php) if you plan to use the HTTP\CURLRequest library

Additionally, make sure that the following extensions are enabled in your PHP:

- json (enabled by default - don't turn it off)
- [mbstring](http://php.net/manual/en/mbstring.installation.php)
- [mysqlnd](http://php.net/manual/en/mysqlnd.install.php)
- xml (enabled by default - don't turn it off)


#### Ubuntu

```Linux
apt get install php php-common php-dev php-intl php-mysql php-xml php-curl php-mbstring php-bcmath php-zip php-mcrypt composer
```
