
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface Oracle {
    function getPackagePrice(string calldata packageName) external view returns (uint256);
}

contract StudentRegistry {
    Oracle public oracle;
    mapping(address => string) private students;
    mapping(address => uint256) private balances;

    event StudentRegistered(address indexed studentAddress, string studentID);
    event PackagePurchased(address indexed buyer, string packageName, uint256 amountPaid);

    constructor(address _oracleAddress) {
        oracle = Oracle(_oracleAddress);
    }

    function registerStudent(string memory studentID) public {
        require(bytes(studentID).length > 0, "Student ID cannot be empty");
        students[msg.sender] = studentID;
        emit StudentRegistered(msg.sender, studentID);
    }

    function getStudentID() public view returns (string memory) {
        return students[msg.sender];
    }

    function getStudentIDByAddress(address studentAddress) public view returns (string memory) {
        return students[studentAddress];
    }

    function buyPackage(string memory packageName) public payable {
        require(bytes(packageName).length > 0, "Package name cannot be empty");

        uint256 packagePrice = oracle.getPackagePrice(packageName);
        require(packagePrice > 0, "Invalid package name");

        require(msg.value >= packagePrice, "Insufficient funds");

        balances[msg.sender] += msg.value;

        emit PackagePurchased(msg.sender, packageName, msg.value);
    }

    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

    function withdrawBalance() public {
        uint256 amount = balances[msg.sender];
        require(amount > 0, "Insufficient balance");

        balances[msg.sender] = 0;

        payable(msg.sender).transfer(amount);
    }
}