<?php 

class User {
    protected $name;
    protected $age;

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
}

class Worker extends User {
    private $salary;

    public function setSalary($salary) {
        $this->salary = $salary;
    }

    public function getSalary() {
        return $this->salary;
    }
}

$ivan = new Worker;
$ivan->setName('Иван');
$ivan->setAge(25);
$ivan->setSalary(1000);

$vasya = new Worker;
$vasya->setName('Вася');
$vasya->setAge(26);
$vasya->setSalary(2000);

echo "Сумма зарплат Ивана и Васи - ".(($ivan->getSalary()) + ($vasya->getSalary()));

?>