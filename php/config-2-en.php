<?php


//相手に自動返信メールを送るかどうか -- 送らない場合は0、送る場合は1にしてください。 --
//HTML側でメールアドレスの項目を必須にしている場合：0または1どちらでもよい。
//HTML側でメールアドレスの項目を任意にしている場合：必ず0にしてください。(この場合、自分のメールアドレスが差出人となり、自分にメールが来ます)
$reply_mail = 1;




//自分に届くメールの内容 -- EOMからEOM;までの間の文章を自分に合わせて変更してください。 --
$send_body = <<<EOM

[Auto-reply]
This is an automatically generated email.
Thank you for your request.

Confirm the following:

--------------------------------------------------------------------------

{$now}

[name] {$name}

[country] {$country}

[mail] {$mail_address}

[address] {$address}

[phone number] {$phone}

[day and arrival time] {$day}

[no night] {$numberofnight}

female:{$female} / male:{$male}

[room type] {$roomtype}

[parking] {$parking}

[message]
{$message}

--------------------------------------------------------------------------

IP:{$_SERVER['REMOTE_ADDR']}
host:{$_SERVER['REMOTE_HOST']}
browser:{$_SERVER['HTTP_USER_AGENT']}

check before send:{$javascript_comment}
now url:{$now_url}
before url:{$before_url}

EOM;




//相手に届く自動返信メールの内容 -- EOMからEOM;までの間の文章を自分に合わせて変更してください。 --
$thanks_body = <<<EOM

[Auto-reply]
This is an automatically generated email.
Thank you for your request.

Confirm the following:

----------------------------------------------------------------------------

time of sending mailform:{$now}

[name]
{$name}

[your country]
{$country}

[mail address]
{$mail_address}

[address]
{$address}

[phone number]
{$phone}

[day] [arrival time]
{$day}

[number of night]
{$numberofnight}

[female]
{$female}

[male]
{$male}

[room type]
{$roomtype}

[parking]
{$parking}

[message]
{$message}

----------------------------------------------------------------------------

We will check the availability and get back to you in 24 hours.

If no answer after 24 hours, please try again.

Thank you very much!

----------------------------------------------------------------------------

Guesthouse Fujiya

Adress:1-7-33 Dogo-machi Matsuyama-City Ehime
TEL:070-5556-2336 (Manager:Rie Sasaki)
Mail:guesthouse.fujiya@gmail.com
URL:yado-fujiya.com

----------------------------------------------------------------------------

EOM;


