
// SPDX-License-Identifier: MIT

interface Oracle {
    function verifyCourseCompletion(string calldata courseName) external view returns (bool);
}

contract CourseCompletionReward {
    Oracle public oracle;
    mapping(address => mapping(string => bool)) private courseCompletionStatus;
    mapping(address => uint256) private balances;

    event CourseCompleted(address indexed player, string courseName, uint256 reward);
    event BalanceWithdrawn(address indexed player, uint256 amount);

    constructor(address _oracleAddress) {
        oracle = Oracle(_oracleAddress);
    }

    function completeCourse(string memory courseName) public {
        require(bytes(courseName).length > 0, "Course name cannot be empty");
        require(!courseCompletionStatus[msg.sender][courseName], "Course already completed");
        require(oracle.verifyCourseCompletion(courseName), "Course completion not verified");

        courseCompletionStatus[msg.sender][courseName] = true;
        balances[msg.sender] += 100;

        emit CourseCompleted(msg.sender, courseName, 100);
    }

    function getRewardBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

    function withdrawReward() public {
        uint256 reward = balances[msg.sender];
        require(reward > 0, "No rewards to withdraw");

        balances[msg.sender] = 0;
        payable(msg.sender).transfer(reward);

        emit BalanceWithdrawn(msg.sender, reward);
    }
}