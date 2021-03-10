# Kosub

Kosub is a demo SPA in which one can search the subtitles from K-drama "Goblin" by some Korean/Chinese/English word query.


## Website content
Following main contents included:

- Regiser (to be updated)
- Log in
- Searching page
- MySentence page

Following helper buttons included in Searching & MySentence page:

- Show/Hide English, Chinese or Korean line.
- Add-to-SentneceBook: Add the selected sentences as favorite.
- Delete-from-SentenceBook: Delete the selected sentences from favorite.
- Context button: Fetch the context of the selected senence.

## Front-end 

- React
- React-router-dom
- axios


## Back-end

 - Python Flask RESTful api deployed on Heroku
 - PostgreSQL
 - Subtiles db pre-processed by Python module [KoNLPy](https://konlpy.org/en/v0.4.4/).


## Learn More: the Conjugatoin Form in Korean

Korean predicate(Verb/Adjective) have 2 forms. <br />
- Basic Form looks like: `하다`. <br />
- Conjugation Form looks like: `해요` or `합니다` etc. <br />

Notice that `하` transform into `해` or `합` here. <br />
It's hard to search a single word and get all it's variatio on the same time.


## Learn More: Morpheme segmentation

Pre-process of Korean sentences refered to as below functionalities:
- Analyze morphemes
- Sentnece Segmentation according to morphemes

Befor:
```bash
'공부를 합니다.'
```

After:
```bash
'공부', '를', '하', 'ㅂ니다', '.'
```

