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

![image](readme/structure.png)

## <div id="database">資料庫設計</div>

![image](readme/database.png)

## <div id="feature">功能介紹</div>

<ul>
  <li>Generate bookmarks</li>
  When user imported URL, the website will call third party API to get the thumbnail and generate bookmarks.
  <li>Create Folders</li>
  User can create folders to classify their bookmarks.
  <li>Create Sticky notes</li>
  User can create sticky notes to write remarks.
  <li>Build collection boards</li>
  If there are too many bookmarks or folders, user can easily find the items by creating collection boards.
</ul>









