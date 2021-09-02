# shortLink_project

網站架設在Heroku。

網址：https://www.isho.xyz/

## 目錄 

<ul>
  <li><a href= #install>專案安裝</li>
  <li><a href= #requirement>滿足需求</li>
  <li><a href= #structures>網站架構</li>
  <li><a href= #database>資料庫設計</li>
  <li><a href= #feature>功能介紹</li>
</ul>

## <div id="install">專案安裝</div>

<ul>
  <li>git clone https://github.com/HSIEH-J/shortLink_project/</li>
  <li>npm install</li>
  <li>建立.env檔案</li>
  <li>匯入資料庫short_links.sql</li>
</ul>


## <div id="requirement">滿足需求</div>

框架版本

<ul>
  <li>Node.js / Expresss: v14.16.0</li>
  <li>React.js: v17.0.2</li>
</ul>

符合需求

<ul>
  <li>React App 使用 Functional Component</li>
  <li>EsLint</li>
  <li>網站架設在Heroku供公開瀏覽</li>
</ul>

## <div id="structures">網站架構</div>

![image](ReadMe/structure.png)

## <div id="database">資料庫設計</div>

![image](ReadMe/database.png)

## <div id="feature">功能介紹</div>

<ul>
  <li>短網址生成</li>
  輸入想轉換的網址後點下按鈕即可得到生成的短網址。
</ul>

![image](ReadMe/generate.gif)

<ul>
  <li>註冊、登入和登出</li>
  點選右上角的Register或者Log In按鈕即可進行帳號註冊或登入作業，註冊或登入後按鈕會換成Log Out的字樣，按下後即可登出。
</ul>

![image](ReadMe/register.gif)

<ul>
  <li>查看短網址點擊次數</li>
  點選Show Redirect Times欄的眼睛圖示即可查看目前短網址的點擊次數，點擊圖示後標題欄會新增更新圖示，點選後將會更新當前點擊次數。
</ul>

![image](ReadMe/redirectTimes.gif)










