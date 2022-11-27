Feature: N11 opening

  Scenario: opening n11 home page
    When I opened n11 site
    Then I should be able to see brands n11 home page


    Scenario: Opening basket page
      Given I opened n11 site
      When I click the basket icon
      Then I should be able to see basket page


  Scenario Outline: searching product
    Given I opened n11 site
    Given I clicked to search bar
    Given I write a <keyword> in "searchbar"
    When I press the enter on keyboard
    Then I should be able to see "product" on screen

    Examples:
    | keyword |
    | telefon |
    | bilgisayar |
    | mikrodalga |