## Zdefiniuj σ -ciało i podaj aksjomatyczną definicję prawdopodobieństwa 
$\sigma$ - ciałem w danym zbiorze $X$ (zwanym przestrzenią) nazywamy rodzinę $\mathcal{F}$ pewnych podzbiorów zbioru $X$, spełniającą trzy warunki:

1. $\empty$ ∈ $\mathcal{F}$;
2. jeśli $A$ ∈ $\mathcal{F}$, to $X \setminus A$ $\in$ $\mathcal{F}$;
3. jeśli $A_n$ ∈ $\mathcal{F}$ dla każdego $n \in \mathbb{R}$, to $\bigcup_{n \in \mathbb{N}} A_n \in \mathcal{F}$.
   
Prawdopodobieństwem nazywamy funkcję $P$ o wartościach rzeczywistych, określoną na $\sigma$-ciele zdarzeń $\mathcal{F}\subset2^\Omega$, spełniającą warunki:

1. $P(A)\geqslant0$ dla każdego $A\in\mathcal{F}$
2. $P(\Omega)=1$
3. Jeżeli dla $A_1,A_2,\dots\in\mathcal{F}$ parami rozłącznych (tzn. $A_i\cap A_j=\emptyset$, gdy $i\ne j$ dla $i,j\in\N_+$), to
$$
P(\bigcup_{i=0}^{\infin}A_i)=\sum_{i=0}^{\infin}P(A_i)
$$

Trójkę $(\Omega,\ \mathcal{F},\ P)$ nazywamy przestrzenią probabilistyczną

## Podaj podstawowe własności prawdopodobieństwa (wymień przynajmniej 5)

Jeżeli $(\Omega,\ \mathcal{F},\ P)$ jest przestrzenią probabilistyczną i $A,\ B,\ a_1,\dots,A_n\in\mathcal{F}$, to:

1. $P(\empty)=0$
2. Jeżeli dla $A_1,A_2,\dots,A_n$ parami rozłącznych (tzn. $A_i\cap A_j=\emptyset$, gdy $i\ne j$ dla $i,j\in\N_+$), to
$$
P(\bigcup_{i=1}^{n}A_i)=\sum_{i=0}^{n}P(A_i)
$$
3. $P(A')=1-P(A)$
4. Jeżeli $A\subset B$, to $P(B\setminus A)=P(B)-P(A)$
5. Jeżeli $A\subset B$, to $P(A)\leqslant P(B)$
6. Dla dowolnego $A$ zachodzi $P(A)\leqslant1$
7. $P(A\cup B)=P(A)+P(B)-P(A\cap B)$

## Podaj klasyczną i geometryczną definicję prawdopodobieństwa



Przyjmijmy, że zbiór zdarzeń elementarnych $\Omega$ jest skończony, a same zdarzenia elementarne jednakowo prawdopodobne. Wówczas prawdopodobieństwo zdarzenia $A\subset\Omega$ wynosi
$$
P(A)=\frac{\#A}{\#\Omega}
$$
Powyższy wzór nazywany jest klasyczną definicją prawdopodobieństwa



[TODO]

## Wypowiedz twierdzenie o subaddytywności prawdopodobieństwa, oraz wzór włączeń i wyłączeń



Niech $(\Omega,\ \mathcal{F},\ P)$ będzie przestrzenią probabilistyczną, oraz niech $\{A_i\}_{i=1}^n\subset\mathcal{F}$ dla pewnego $n\in\N$. Wówczas
$$
P(\bigcup_{k=1}^{n}A_k)\leqslant\sum_{k=1}^{n}P(A_k)
$$



Niech $(\Omega,\ \mathcal{F},\ P)$ będzie przestrzenią probabilistyczną. Dla dowolnego $\{A_i\}_{i=1}^{n}\subset\mathcal{F}$ zachodzi
$$
P(A_1\cup\dots\cup A_n)=\sum_{1\leqslant i\leqslant n}P(A_i)-\sum_{1\leqslant i_1<i_2\leqslant n}P(A_{i_1}\cap A_{i_2})+\dots+(-1)^{n+1}\cdot P(A_1\cap\dots\cap A_n)
$$

## Wypowiedz twierdzenie o ciągłości

Niech $(\Omega,\ \mathcal{F},\ P)$ będzie przestrzenią probabilistyczną.

1. Jeżeli $\{A_n\}_{n=1}^{\infin}\subset\mathcal{F}$, oraz dla dowolnego $n\in\N,\ A_n\subset A_{n+1}$ (nazywamy $A_n$ wstępującą rodziną zdarzeń) i $\bigcup_{n=1}^{\infin}A_n=A$, to
$$
P(A)=\lim_{n\rightarrow\infin}P(A_n)
$$
2. Jeżeli $\{A_n\}_{n=1}^{\infin}\subset\mathcal{F}$, oraz dla dowolnego $n\in\N,\ A_{n+1}\subset A_n$ (nazywamy $A_n$ zstępującą rodziną zdarzeń) i $\bigcap_{n=1}^{\infin}A_n=A$, to
$$
P(A)=\lim_{n\rightarrow\infin}P(A_n)
$$

## Podaj definicję prawdopodobieństwa warunkowego, oraz podaj wzór łańcuchowy



Prawdopodobieństwem warunkowym zajścia zdarzenia $A$ pod warunkiem zajścia zdarzenia $B$, gdzie $P(B)>0$, nazywamy liczbę
$$
P(A|B)=\frac{P(A\cap B)}{P(B)}
$$



Jeżeli zdarzenia $A_1,\ A_2,\dots,A_n$ spełniają warunek $P(A_1\cap\dots\cap A_{n-1})>0$ to
$$
P(A_1\cap\dots\cap A_n)=P(A_1)\cdot P(A_2|A_1)\dots P(A_n|A_1\cap\dots\cap A_{n-1})
$$

## Podaj definicję rozbicia przestrzeni oraz wzór na prawdopodobieństwo całkowite



Rozbiciem przestrzeni $\Omega$ nazywamy rodzinę zdarzeń $\{H_i\}_{i\in I}$, które parami wykluczają się, ich suma zaś jest równa $\Omega$



Jeżeli $\{H_1,\ H_2,\dots,H_n\}$ jest rozbiciem $\Omega$ na zdarzenia o dodatnim prawdopodobieństwie, to dla dowolnego zdarzenia $A$
$$
P(A)=\sum_{i=1}^{n}P(A|H_i)\cdot P(H_i)
$$

## Wypowiedz twierdzenie Bayesa

Jeżeli $\{H_i\}_{i\in I}$ jest przeliczalnym rozbiciem $\Omega$ na zdarzenia o dodatnim prawdopodobieństwie oraz $P(A)>0$, to dla dowolnego $j\in I$ mamy
$$
P(H_j|A)=\frac{P(A|H_j)\cdot P(H_j)}{\sum_{i\in I}P(A|H_i)\cdot P(H_i)}
$$

## Podaj definicję niezależności dwóch zdarzeń oraz niezależności dowolnej liczby zdarzeń



Zdarzenia $A$ i $B$ nazywamy niezależnymi, gdy
$$
P(A\cap B)=P(A)\cdot P(B)
$$

Alternatywnie: zdarzenie $B$ nie zależy od zdarzenia $A$, gdy
$$
P(B|A)=P(B)
$$



Zdarzenia $A_1,\dots,A_n$ nazywamy niezależnymi, gdy
$$
P(A_{i_1}\cap\dots\cap A_{i_k})=P(A_{i_1})\cdot\ \dots\ \cdot P(A_{i_k})
$$
dla wszystkich ciągów wskaźników ($i_1,\dots,i_k$), gdzie $1\leqslant i_1<\dots<i_k\leqslant n$, $k=2,\ 3,\dots,\ n$

## Podaj równoważne warunki na niezależność zdarzeń
$$
P(A\cap B)=P(A)\cdot P(B)\\[0.5em]
$$
$$
P(B|A)=P(B)
$$

## Omów schemat Bernoulliego

Schematem Bernoulliego będziemy nazywać skończony ciąg niezależnych powtórzeń tego samego doświadczenia o dwóch możliwych wynikach, nazywanych umownie sukcesem i porażką. Poszczególne doświadczenia będziemy nazywać próbami Bernoulliego.



Prawdopodobieństwo pojawienia się dokładnie $k$ sukcesów w schemacie Bernoulliego $n$ prób, z prawdopodobieństwem sukcesu w pojedyńczej próbie równym $p$ wynosi
$$
{n\choose k}\cdot p^k\cdot (1-p)^{n-k}
$$

## Wypowiedz lemat Borela-Cantelliego

Dla dowolnego ciągu zdarzeń ($A_n$), definiujemy zbiór zdarzeń, które zachodzą nieskończenie często jako:
$$
\{A_n\text{ n.c.}\} = \bigcap_{m=1}^{\infin}\bigcup_{n=m}^{\infin}A_n
$$



Jeśli $\sum^{\infin}_{n=1}P(A_n)\lt{\infin}$, to $P(\{A_n\text{ n.c.}\})=0$



Jeśli zdarzenia $A_1,\ A_2,\ \dots$ są niezależne i $\sum^\infin_{n=1}P(A_n)=\infin$, to $P(\{A_n\text{ n.c.}\})=1$

## Podaj definicję zmiennej losowej, oraz rozkładu zmiennej losowej

Funkcję $X:\Omega\rightarrow\R$ nazywamy zmienną losową o wartościach w $\R$, jeśli dla każdego $a\in\R$ zbiór $X^{-1}([-\infin,\ a])$ jest zdarzeniem, czyli $X^{-1}([-\infin,\ a])\in\mathcal{F}$

Zatem z wynikiem doświadczenia losowego wiąże się w naturalny sposób pewną liczbę. Takie przyporządkowanie to oczywiście funkcja określona na zbiorze $\Omega$ i o wartościach w zbiorze liczb rzeczywistych. Chcemy też mówić o szansach przyjęcia przez tę funkcję takiego czy innego wyniku. Dobrze by było, aby zbiór zdefiniowany przez warunek $a\leqslant X\leqslant b$ był zdarzeniem dla dowolnych $a$ i $b$. Zbiór ten jest przeciwobrazem przedziału $[a,\ b]$ przy odwzorowaniu $X$. Można to zapisać formalnie w następujący sposób:
$$
X^{-1}([a,\ b])=\{\omega:a\leqslant X(\omega)\leqslant b\}\in\mathcal{F}
$$

## Podaj definicję zmiennej losowej dyskretnej, oraz zmiennej losowej ciągłej



Zmienna losowa $X$ ma rozkład dyskretny, jeśli istnieje taki zbiór przeliczalny $\mathcal{S}\subset\R$, że $\mu_X(\mathcal{S}) = 1$.



Zmienna losowa $X$ ma rozkład ciągły, gdy istnieje taka funkcja $f:\R\rightarrow\R$, że
$$
\mu_X(A)=\int_Af(x)\mathrm{d}x, A\in\mathcal{B}(\R)
$$

Funkcję $f$ nazywamy gęstością rozkładu $\mu_X$. Z definicji wynika, że 

## Podaj definicję dystrybuanty oraz jej własności



Dystrybuantą zmiennej losowej $X:\Omega\rightarrow\R$ nazywamy funkcję $F_X:\R\rightarrow\R$, określoną zależnością
$$
F_X(t)=P(X\leqslant t)
$$



Dystrybuanta $D_X$ zmiennej losowej $X$ ma następujące własności:

1. $F_X$ jest niemalejąca
2. $\lim_{t\rightarrow\infin}F_X(t)=1$; $\lim_{t\rightarrow-\infin}F_X(t)=0$
3. $F_X$ jest prawostronnie ciągła

## Wypowiedz twierdzenie o wyznaczaniu gęstości zmiennej losowej $Y=aX+b$ na podstawie gęstości ciągłej zmiennej losowej $X$

Jeśli zmienna losowa $X$ ma rozkład ciągły o gęstości $f_X$, to zmienna losowa $Y=aX+b$, gdzie $a\ne0$, ma rozkład ciągły o gęstości
$$
f_Y(u)=f_X(\frac{u-b}{a})\frac{1}{|a|}
$$

## Podaj definicję wartości oczekiwanej dla zmiennej losowej dyskretnej, oraz dla zmiennej losowej ciągłej



Niech $X$ ma rozkład $\{(x_i,\ p_i):i\in I\}$. Mówimy, że wartość oczekiwana zmiennej losowej $X$ istnieje, gdy $\sum_{i\in I}|x_i|p_i\lt\infin$. Wtedy wartością oczekiwaną zmiennej losowej nazywamy liczbę
$$
\mathcal{E}X=\sum_{i\in I}x_i p_i\lt\infin
$$
W przeciwnym razie powiemy, że zmienna losowa nie ma wartości oczekiwanej.



Załóżmy, że zmienna losowa $X$ ma rozkład ciągły z gęstością $f$. Mówimy, że istnieje wartość oczekiwana, gdy
$$
\int_{-\infin}^{\infin}|x|f(x)\mathrm{d}x\lt\infin
$$

Wartością oczekiwaną nazwiemy wtedy liczbę
$$
\mathcal{E}X=\int_{-\infin}^{\infin}xf(x)\mathrm{d}x
$$

## Podaj własności wartości oczekiwanej

Załóżmy, że istnieją wartości oczekiwane $\mathcal{E}X$ i $\mathcal{E}Y$. Wtedy

1. jeśli $X\geqslant0$, to $\mathcal{E}X\geqslant0$
2. jeśli $X\leqslant Y$, to $\mathcal{E}X\leqslant\mathcal{E}Y$
3. $|\mathcal{E}X|\leqslant\mathcal{E}|X|$
4. dla $a,\ b\in\R$ istnieje wartość oczekiwana zmiennej $aX+bY$ i
$$
\mathcal{E}(aX+bY)=a\mathcal{E}X+b\mathcal{E}Y
$$
5. jeśli $X=1_A$, to $\mathcal{E}X=P(A)$

## Podaj definicję wariancji i wymień jej własności



Załóżmy, że $\mathcal{E}X=m$. Jeśli $\mathcal{E}((X-m)^2)<\infin$, to tę liczbę nazwiemy wariancją zmiennej losowej $X$ o wartościach rzeczywistych i oznaczamy
$$
\mathcal{D}^2X=\mathcal{E}((X-m)^2)\\[0.5em]
\mathcal{D}^2X=\mathcal{E}X^2-(\mathcal{E}X)^2
$$



[TODO]

## Podaj definicję kowariancji oraz współczynnika korelacji



Kowariancją całkowalnych zmiennych losowych $X$ i $Y$, spełniających warunek $\mathcal{E}|XY|<\infin$, nazywamy wielkość
$$
\text{cov}(X,\ Y)=\mathcal{E}((X-\mathcal{E}X)(Y-\mathcal{E}Y))\\[0.5em]
\text{cov}(X,\ Y)=\mathcal{E}(XY)-\mathcal{E}X\mathcal{E}Y
$$



Współczynnik korelacji definiujemy jako
$$
\rho(X,\ Y)=\frac{\text{cov}(X,\ Y)}{\sqrt{(\mathcal{D}^2X)(\mathcal{D}^2Y)}},\ \mathcal{D}^2X,\ \mathcal{D}^2Y>0
$$

## Podaj definicję wielowymiarowej zmiennej losowej oraz jej rozkładów brzegowych



[TODO]



$P(X_j\in B)=P(X_1\in\R,\dots,X_{j-1}\in\R,X_j\in B,X_{j+1}\in\R,\dots,X_n\in\R)$

## Podaj definicję wartości oczekiwanej, oraz macierzy kowariancji dla wielowymiarowej zmiennej losowej



Wartością oczekiwaną wielowymiarowej zmiennej losowej $X=(X_1,\dots,X_n)$ o wartościach w $\R^n$ nazywamy wektor $\mathcal{E}X=(\mathcal{E}X_1,\dots,\mathcal{E}X_n)$, o ile wszystkie współrzędne mają wartość oczekiwaną.



Jeśli $\mathcal{D}^2X_j<\infin$ dla każdego $j=1,2,\dots,n$, to macierz $Q_X=[c_{ij}]_{i,j=1,\dots,n}$, gdzie $c_{ij}=\text{cov}(X_i,\ X_j)$ nazywamy macierzą kowariancji wektora losowego $X=(X_1,\dots,X_n)$

## Podaj warunek równoważny na niezależność rozkładów dyskretnych oraz niezależność rozkładów ciągłych



Zmienne losowe $X_1,\dots,X_n$ o rozkładach dyskretnych są niezależne wtedy i tylko wtedy, gdy dla każdego ciągu $x_1,\ x_2,\dots,\ x_n$, gdzie $P(X_i=x_i)>0$, $i=1,\dots,n$
$$
P(X_1=x_1,\dots,X_n=x_n)=P(X_1=x_1)\cdot\ \dots\ \cdot P(X_n=x_n)
$$



Jeśli $X_1,\dots,X_n$ są zmiennymi losowymi o rozkładach ciągłych z gęstościami odpowiednio $g_1,\dots,g_n$, to zmienne te są niezależne wtedy i tylko wtedy, gdy $\mu_{(X_1,\dots,X_n)}$ jest rozkładem ciągłym z gęstością
$$
g(x_1,\dots,x_n)=g_1(x_1)\cdot\ \dots\ \cdot g_n(x_n)
$$

## Wypowiedz twierdzenie o niezależności funkcji od niezależnych zmiennych losowych

Załóżmy, że zmienne losowe
$$
X_{1,1},\ X_{1,2},\dots,X_{1,k_1},\ X_{2,1},\dots,X_{2,k_2},\dots,X_{n,1},\dots,X_{n,k_n}
$$
są niezależne. Niech $\varphi_j:\R^{k_j}\rightarrow\R$ będą takimi funkcjami, że $Y_j=\varphi_j(X_{j,1},\dots,X_{j,k_j})$, $j=1,\ 2,\dots,\ n$ są zmiennymi losowymi. Wówczas zmienne losowe $Y_1,\dots,Y_n$ są niezależne

## Wypowiedz twierdzenie o wartości oczekiwanej iloczynu niezależnych zmiennych losowych oraz o wariancji sumy niezależnych zmiennych losowych



Jeśli $X_1,\dots,X_n$ są niezależnymi zmiennymi losowymi, które mają wartość oczekiwaną, to istnieje wartość oczekiwana iloczynu $X_1\cdot\ \dots\ \cdot X_n$ i
$$
\mathcal{E}(X_1\cdot\ \dots\ \cdot X_n)=\mathcal{E}X_1\cdot\ \dots\ \cdot \mathcal{E}X_n
$$



Jeżeli $X_1,\dots,X_n$ są niezależnymi zmiennymi losowymi, mającymi wariancję, to istnieje wariancja sumy i
$$
\mathcal{D}^2(\sum_{i=1}^n X_i)=\sum_{i=1}^n \mathcal{D}^2X_i
$$

## Podaj definicję splotu zmiennych losowych dyskretnych, oraz zmiennych losowych ciągłych

## Podaj definicję warunkowej wartości oczekiwanej zmiennej losowej, oraz warunkowej wartości oczekiwanej zmien-nej losowejYpod warunkiem zmiennej losowej $X$

## Wymień własności warunkowej wartości oczekiwanej

## Wypowiedz nierówność Czebyszewa i nierówność Markowa1

## Wypowiedz nierówność Czebyszewa-Bienaymé i wykładniczą wartość oczekiwaną

## Wypowiedz Prawo Wielkich Liczb Bernoulliego

## Wypowiedz Słabe Prawo wielkich Liczb

## Wypowiedz Twierdzenie Kołmogorowa

## Wypowiedz Mocne Prawo Wielkich Liczb Kołmogorowa

## Wypowiedz twierdzenie Poissona

## Wypowiedz Centralne Twierdzenie Graniczne

## Wypowiedz twierdzenie de Moivre’a-Laplace’a

## Podaj definicję statystycznej populacji, prostej próby losowej, oraz statystyki

## Podaj definicjęśredniej w prostej próbie losowej, oraz częstotliwości występowania

## Podaj definicję estymatora, oraz obciążenia estymatora i estymatora nieobciążonego

## Podaj definicję estymatora nieobciążonego o minimalnej wariancji

## Podaj definicję błęduśredniokwadratowego, estymatora dopuszczalnego i błędu standardowego estymatora