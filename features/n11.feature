Feature: N11 opening

  Scenario: opening n11 home page
    When I opened n11 site
    Then I should be able to see brands n11 home page


    Scenario: Opening basket page
      Given I opened n11 site
      When I click the basket icon
      Then I should be able to see basket page