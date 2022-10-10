local str = [[origin
https://github.com/TrinhMinhVu/sudoku.git (fetch)
origin	https://github.com/TrinhMinhVu/sudoku.git (fetch)]]

local a, b = string.find(str, "github.com")

print(a , b)

local c = string.find(str, '/', b + 2)

print(c)

local owner = string.sub(str, b+2, c-1)

print(owner)

local d = string.find(str, ".git", b+2)

print(d)
local owner_and_repo = string.sub(str, b+2, d-1)

print(owner_and_repo)

local branch = [[]]
print(string.sub(branch, 1, #branch-1))
