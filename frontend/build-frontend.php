<?php
declare(strict_types=1);

$build = isset($argv[1]) && '--build' === $argv[1];

if ($build) {
    exec('npm run build');
}
// replace some stuff on index.twig
$file    = '../resources/views/v2/index.twig';
$content = file_get_contents($file);
$config  = [
    'indent' => true,
    'wrap'   => '1000',
];

$tidy = new tidy();
$tidy->parseString($content, $config, 'utf8');
$tidy->cleanRepair();
$result = tidy_get_output($tidy);

// do some str_replaces
$values = [
    'link href'  => 'link nonce="{{ JS_NONCE }}" href',
    'script src' => 'script nonce="{{ JS_NONCE }}" src',
];

//$result = str_replace(array_keys($values), array_values($values), $result);
//file_put_contents($file, $result);


