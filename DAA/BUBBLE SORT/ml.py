#come in exam

# n=[]

# for i in range(3):
#      n.extend(n)
#      n.append(i)
   

# print(len(n))

n=[32,45,76,23,453,56,56]

for i in n:
     n.append(n.pop())

print(n)




