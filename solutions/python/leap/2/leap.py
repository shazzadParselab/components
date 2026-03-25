def leap_year(year):
    # Find leap Year or not
    
    '''
    1997 was not a leap year as it's not divisible by 4.
    1900 was not a leap year as it's not divisible by 400.
    2000 was a leap year!
    '''

    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            return False
        return True
    return False
