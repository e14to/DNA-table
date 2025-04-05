# def double_integer(i):
#     if i > 9 :
#         print("this number is doubl-digit number")
#     else:        
#         return i * 2 
    

# user_input =int(input("enter single-digit number: "))  
# print(double_integer(user_input))

def calculator(operation, num1, num2):
    if operation == "x": 
        return num1 * num2
    if operation == "/":
        return num1 / num2
    if operation == "+":
        return num1 + num2
    if operation == "-":
        return num1 -num2
    if operation == "^":
        return num1 ** num2

user_input = input("enter operation: \n x \n / \n + \n - \n ^ \n ")
num1 = int(input("enter number1: ")) 
num2 = int(input("enter number2: "))


print(calculator(user_input, num1, num2))