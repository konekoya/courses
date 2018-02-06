import random

print('Hello, what is your favorite number?')
number = input()

print('Your favorite number is ' + number)

minNum = 1
maxNum = 100
magicNum = random.randint(minNum, maxNum)

message = "The magic number is between {0} and {1}"
print(message.format(minNum, maxNum))

found = False

while not found:
    print('Guess what it is?')
    guess = int(input())

    if guess == magicNum:
        found = True

    if guess < magicNum:
        print('Too low')

    if guess > magicNum:
        print('Too high')

print('You got it!')
