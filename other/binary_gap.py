# From Codibility
# Find longest sequence of zeros
# in binary representation of an integer

def make_binary(num):
    return str(bin(num)).strip("0b")

def solution(N):
    # write your code in Python 2.7
    binary_num = make_binary(N)

    num_length = len(binary_num)
    current_gap_length=0
    max_gap_length=0

    for i in range(num_length):
        if binary_num[i]=="0":
            current_gap_length += 1
        if binary_num[i]=="1":
            if current_gap_length > max_gap_length:
                max_gap_length=current_gap_length
            current_gap_length = 0

    return max_gap_length

print solution(1041)