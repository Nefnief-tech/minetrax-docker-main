<?php 
return [
  'accepted' => ' :attribute має бути прийнято.',
  'accepted_if' => ' :attribute має бути прийнято, коли :other дорівнює :value.',
  'active_url' => ' :attribute не є дійсною URL-адресою.',
  'after' => ' :attribute має бути датою після :date.',
  'after_or_equal' => ' :attribute має бути датою після або дорівнювати :date.',
  'alpha' => ' :attribute може містити лише літери.',
  'alpha_dash' => ' :attribute може містити лише літери, цифри, тире та підкреслення.',
  'alpha_num' => ' :attribute може містити лише літери та цифри.',
  'array' => ' :attribute має бути масивом.',
  'before' => ' :attribute має бути датою перед :date.',
  'before_or_equal' => ' :attribute має бути датою, що передує або дорівнює :date.',
  'between' => [
    'array' => ' :attribute має містити від :min до :max елементів.',
    'file' => ' :attribute має бути між :min і :max кілобайтами.',
    'numeric' => ' :attribute має бути між :min і :max.',
    'string' => 'Символ :attribute має бути між символами :min і :max.',
  ],
  'boolean' => 'Поле :attribute має мати значення true або false.',
  'confirmed' => 'Підтвердження :attribute не збігається.',
  'current_password' => 'Пароль неправильний.',
  'date' => ' :attribute не є дійсною датою.',
  'date_equals' => ' :attribute має бути датою, що дорівнює :date.',
  'date_format' => ' :attribute не відповідає формату :format.',
  'declined' => ' :attribute має бути відхилено.',
  'declined_if' => ' :attribute має бути відхилено, коли :other є :value.',
  'different' => ' :attribute і :other мають бути різними.',
  'digits' => ' :attribute має складатися з :digits цифр.',
  'digits_between' => ' :attribute має бути між :min і :max цифрами.',
  'dimensions' => ' :attribute має недійсні розміри зображення.',
  'distinct' => 'Поле :attribute має повторюване значення.',
  'doesnt_start_with' => ' :attribute може не починатися з одного з наступного: :values.',
  'email' => ' :attribute має бути дійсною електронною адресою.',
  'ends_with' => ' :attribute має закінчуватися одним із таких: :values.',
  'enum' => 'Вибраний :attribute недійсний.',
  'exists' => 'Вибраний :attribute недійсний.',
  'file' => ' :attribute має бути файлом.',
  'filled' => 'Поле :attribute повинно мати значення.',
  'gt' => [
    'array' => ' :attribute має мати більше ніж :value елементів.',
    'file' => ' :attribute має бути більшим за :value кілобайт.',
    'numeric' => ' :attribute має бути більшим за :value.',
    'string' => 'Символ :attribute має бути більшим за :value.',
  ],
  'gte' => [
    'array' => ' :attribute має містити :value елементів або більше.',
    'file' => ' :attribute має бути більше або дорівнювати :value кілобайтам.',
    'numeric' => ' :attribute має бути більше або дорівнювати :value.',
    'string' => ' :attribute має бути більше або дорівнювати :value символів.',
  ],
  'image' => ' :attribute має бути зображенням.',
  'in' => 'Вибраний :attribute недійсний.',
  'in_array' => 'Поле :attribute не існує в :other.',
  'integer' => ' :attribute має бути цілим числом.',
  'ip' => ' :attribute має бути дійсною IP-адресою.',
  'ipv4' => ' :attribute має бути дійсною адресою IPv4.',
  'ipv6' => ' :attribute має бути дійсною адресою IPv6.',
  'json' => ' :attribute має бути дійсним рядком JSON.',
  'lt' => [
    'array' => ' :attribute має містити менше ніж :value елементів.',
    'file' => ' :attribute має бути меншим за :value кілобайт.',
    'numeric' => ' :attribute має бути меншим за :value.',
    'string' => 'Символ :attribute має бути менше ніж :value.',
  ],
  'lte' => [
    'array' => 'У :attribute не повинно бути більше :value елементів.',
    'file' => ' :attribute має бути меншим або дорівнювати :value кілобайтам.',
    'numeric' => ' :attribute має бути менше або дорівнювати :value.',
    'string' => ' :attribute має бути менше або дорівнювати :value символів.',
  ],
  'mac_address' => ' :attribute має бути дійсною MAC-адресою.',
  'max' => [
    'array' => ' :attribute не може мати більше :max елементів.',
    'file' => ' :attribute не може перевищувати :max кілобайт.',
    'numeric' => ' :attribute не може бути більшим за :max.',
    'string' => ' :attribute не може бути більшим за :max символів.',
  ],
  'mimes' => ' :attribute має бути файлом типу: :values.',
  'mimetypes' => ' :attribute має бути файлом типу: :values.',
  'min' => [
    'array' => ' :attribute має мати принаймні :min елементів.',
    'file' => ' :attribute має бути не менше :min кілобайт.',
    'numeric' => ' :attribute має бути не менше :min.',
    'string' => ' :attribute має бути принаймні :min символів.',
  ],
  'multiple_of' => ' :attribute має бути кратним :value',
  'not_in' => 'Вибраний :attribute недійсний.',
  'not_regex' => 'Формат :attribute недійсний.',
  'numeric' => ' :attribute має бути числом.',
  'password' => [
    'letters' => ' :attribute має містити принаймні одну літеру.',
    'mixed' => ' :attribute має містити принаймні одну велику та одну малу літери.',
    'numbers' => ' :attribute має містити принаймні одне число.',
    'symbols' => ' :attribute має містити принаймні один символ.',
    'uncompromised' => 'Даний :attribute з\'явився в результаті витоку даних. Виберіть інший :attribute.',
  ],
  'present' => 'Поле :attribute повинно бути присутнім.',
  'prohibited' => 'Поле :attribute заборонено.',
  'prohibited_if' => 'Поле :attribute заборонено, якщо :other дорівнює :value.',
  'prohibited_unless' => 'Поле :attribute заборонено, якщо :other не знаходиться в :values.',
  'prohibits' => 'Поле :attribute забороняє наявність :other.',
  'regex' => 'Формат :attribute недійсний.',
  'required' => 'Поле :attribute є обов’язковим.',
  'required_array_keys' => 'Поле :attribute має містити записи для: :values.',
  'required_if' => 'Поле :attribute є обов’язковим, якщо :other дорівнює :value.',
  'required_unless' => 'Поле :attribute є обов’язковим, якщо :other не знаходиться в :values.',
  'required_with' => 'Поле :attribute є обов’язковим, якщо присутній :values.',
  'required_with_all' => 'Поле :attribute є обов’язковим, якщо присутні :values.',
  'required_without' => 'Поле :attribute є обов’язковим, якщо :values немає.',
  'required_without_all' => 'Поле :attribute є обов’язковим, якщо немає жодного з :values.',
  'same' => ' :attribute і :other мають збігатися.',
  'size' => [
    'array' => ' :attribute має містити :size елементів.',
    'file' => ' :attribute має бути :size кілобайт.',
    'numeric' => ' :attribute має бути :size.',
    'string' => 'Символ :attribute має бути :size.',
  ],
  'starts_with' => ' :attribute має починатися з одного з наступного: :values.',
  'string' => ' :attribute має бути рядком.',
  'timezone' => ' :attribute має бути дійсною зоною.',
  'unique' => 'Х1 вже взято.',
  'uploaded' => 'Не вдалося завантажити :attribute.',
  'url' => 'Формат :attribute недійсний.',
  'uuid' => ' :attribute має бути дійсним UUID.',
  'custom' => [
    'attribute-name' => [
      'rule-name' => 'custom-message',
    ],
  ],
  'attributes' => [
  ],
];