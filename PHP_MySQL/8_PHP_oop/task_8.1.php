<?php

class Student {
    private $name;
    private $age;
    private $group;

    public function setName($name) {
        $this->name = $name;
    }

    public function getName() {
        return $this->name;
    }

    public function setAge($age) {
        $this->age = $age;
    }

    public function getAge() {
        return $this->age;
    }

    public function setGroup($group) {
        $this->group = $group;
    }

    public function getGroup() {
        return $this->group;
    }
}

$ivan = new Student;
$ivan->setName('Иван');
$ivan->setAge(21);
$ivan->setGroup('U1001');

$vasya = new Student;
$vasya->setName('Вася');
$vasya->setAge(20);
$vasya->setGroup('U1002');

$ivan_age = $ivan->getAge();
$vasya_age = $vasya->getAge();

echo 'Группа Ивана - '.($ivan->getGroup()).'.<br>';
echo 'Группа Васи - '.($vasya->getGroup()).'.<br>';
echo 'Сумма возрастов двух студентов - '.($ivan_age + $vasya_age).'.';

?>