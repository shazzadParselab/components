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
    return year % 4 == 0 and ( year % 100 != 0 or year % 400 == 0 )