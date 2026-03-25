"""
Module to determine whether a given year is a leap year.

A leap year:
- Is divisible by 4
- Not divisible by 100 unless also divisible by 400
"""

def leap_year(year):
    """
    Check if a given year is a leap year.

    :param year: int - year to check
    :return: bool - True if leap year, otherwise False
    """

    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            return False
        return True
    return False
