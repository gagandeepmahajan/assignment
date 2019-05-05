Feature: Invite Collaborator

  @BandInvite
  Scenario Outline: Verify on Invite Collaborator screen user is able to enter details
    Given I visit Bandlab
    When I Login to the application with <username> and <password>
    And I Navigate to My Projects
    And I Navigate to Invite Collaborator screen
    Then Enter <people> and <message> text in respective field and confirm

    Examples:
      | username                    | password | people           | message                                                                          |
      | mahajan.gagandeep@gmail.com | Gagan@12 | gagandeepmahajan | This is long text message entering on the message text field for testing purpose |

  @BandInvite
  Scenario Outline: Verify that message field accepts special & aplhanumeric character
    Given I visit Bandlab
    When I Login to the application with <username> and <password>
    And I Navigate to My Projects
    And I Navigate to Invite Collaborator screen
    Then Enter <people> and <message> text in respective field and confirm

    Examples:
      | username                    | password | people           | message |
      | mahajan.gagandeep@gmail.com | Gagan@12 | gagandeepmahajan | test@12 |
