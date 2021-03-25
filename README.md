# Kosub

[Kosub](https://kosub.herokuapp.com/) is a demo SPA in which one can search the subtitles from K-drama "Goblin" by some Korean/Chinese/English word query. <br />
![image](https://github.com/benson00077/kosub_react/blob/master/readme_src/demo1.gif) <br />
![image](https://github.com/benson00077/kosub_react/blob/master/readme_src/demo2.gif) <br />

RWD supported. <br />
![image](https://github.com/benson00077/kosub_react/blob/master/readme_src/demo_search_mobile.gif) 
![image](https://github.com/benson00077/kosub_react/blob/master/readme_src/demo_drawer_mobile.gif)


## Content
Following main contents included:

1. Log in page
2. Searching page
    - Search subtitles in Kdrama
    - Add selected line as favorite sentence (Currently unavailable due to Heroku db limit)
    - Fetch the context of the selected line, as shown below
    - Show / Hide target language line, as shown below

3. MySentence page 
    - Fetch the context of the selected line
    - Delete selected line as favorite sentence
        ![image](https://github.com/benson00077/kosub_react/blob/master/readme_src/demo_delete_fav.gif)

## Front-end 
- React
- React-router-dom
- axios

## Back-end [(repo here)](https://github.com/benson00077/kosub_api_heroku) 
 - Python Flask RESTful api
 - PostgreSQL
 - Deployed on Heroku
 - Subtiles db pre-processed by Python module [KoNLPy](https://konlpy.org/en/v0.4.4/).


## Learn More: the Conjugatoin Form in Korean

Korean predicate(Verb/Adjective) have 2 forms. <br />
For example: <br />
`Basic Form`-- `하다`. <br />
`Conjugation Form`-- `해요` or `합니다` etc. <br />

| Form | Example | difference
| ------ | ------ | ------ |
|Basic Form|`하다` |  `하`
|Conjugation Form|`해요` or `합니다`.. etc. |  `해` or `합`

As shown upon the table, it's hard to search by a single word's Bascir form (`하다`) and expect to get all it's variated Conjugation Form(`해요` or `합니다`  etc.) on the internet, which could somtimes confuse Korean-lerner.
And this is the reson why I bould this website and how [KoNLPy](https://konlpy.org/en/v0.4.4/) could help on it.


## Learn More: Morpheme segmentation

Pre-process of Korean sentences refered to as below functionalities:
- Morphemes analyzing
- Sentnece Segmentation according to morphemes

For eample: <br />

Befor:
```bash
'공부를 합니다.'
```

After:
```bash
'공부', '를', '하', 'ㅂ니다', '.'
```

