Feature: Create Shout photo

  @CreateShout
  Scenario Outline: Verify that user successfully able to publish photo to the followers
    Given I visit Bandlab
    When I Login to the application with <username> and <password>
    Then Verify Create Shout button exist
    And I Logout from application

    Examples:
      | username                    | password |
      | mahajan.gagandeep@gmail.com | Gagan@12 |