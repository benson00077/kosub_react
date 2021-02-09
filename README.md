# Kosub

Kosub is a SPA demo in which one can search the subtitles from K-drama "Goblin" by some Korean/Chinese/English word query.


## Website content
Following main contnets included:

- Regiser (to be updated)
- Log in
- Searching page
- My Favorite Sentence page

Following helper buttons included in searching page:

- Show/Hide English, Chinese or Korean line in Search Page.
- Add-to-SentneceBook: Add the selected sentences as favorite.

## Front-end 

- React
- React-router-dom
- axios


## Back-end

 - Python Flask RESTful api & SQLite
 - Subtiles pre-processed by Python module [KoNLPy](https://konlpy.org/en/v0.4.4/).


## Learn More: `Conjugatoin Form` in Korean

Predicate(Verb/Adjective) have 2 forms.
Basic Form looks like: `하다`.
Conjugation Form looks like: `해요` or `합니다` etc.

Notice that `하` transform into `해` or `합` here.
It's hard to search a single word and get all it's variatio on the internet.


## Learn More: Morpheme segmentation

Pre-process of Korean sentences refered to as below functionalities:
- Analyze morphemes
- Sentnece Segment according to morphemes

Befor:
```bash
'공부를 합니다.'
```

After:
```bash
'공부', '를', '하', 'ㅂ니다', '.'
```

