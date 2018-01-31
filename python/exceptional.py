'''A module for demonstrating exceptions.'''

def convert(s):
    '''Convert to an integer.'''
    x = -1
    try:
        x = int(s)
        print('Convertion succeeded! x =', x)
    except (ValueError, TypeError):
        print('Convertion failed')
    return x