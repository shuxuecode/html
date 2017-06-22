import os

# os.chdir('E:/git_repo/springBoot') 

os.system("git status")

os.system("git pull")

os.system("git add .")

os.system("git commit -m commitBy%date:~0,4%年%date:~5,2%月%date:~8,2%号%time:~0,2%时%time:~3,2%分%time:~6,2%秒")

os.system("git push")

# os.system("pause")

print("---------------------------------------------------------------")
print("commit success !!! ok !")
print("---------------------------------------------------------------")

os.system('ping -n 5 127.1>nul')
