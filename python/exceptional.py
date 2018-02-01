'''A module for demonstrating exceptions.'''

import sys

def convert(s):
    '''Convert to an integer.'''
    try:
        return int(s)
    except (ValueError, TypeError) as e:
        print('Convertion error: {}'\
          .format(str(e)),
          file=sys.stderr)
    return -1