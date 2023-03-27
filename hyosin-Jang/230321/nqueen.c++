#include <stdio.h>
#include <stdlib.h>

int count = 0;
int n;
int board[15];

// 현재 퀸을 놓은 방식이 유망한지 (가능성 있는지) 판단하는 함수
int promising(int idx)
{
   for (int i = 0; i < idx; i++)
   {
      if (board[idx] == board[i] || idx - i == abs(board[idx] - board[i]))
      {
         return 0;
      }
   }
   return 1;
}

// nqueen 알고리즘 수행
void nqueen(int idx)
{
   if (idx == n)
   {
      count++;
      return;
   }
   for (int i = 0; i < n; i++)
   {
      board[idx] = i;
      if (promising(idx))
      {
         nqueen(idx + 1);
      }
   }
}

int main()
{
   scanf("%d", &n);
   nqueen(0);
   printf("%d", count);
}