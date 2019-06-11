from flask import Flask, render_template, redirect, url_for


app = Flask(__name__)

@app.route("/")
def home():
  return render_template("index.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/forgotpassword")
def forgotpassword():
    return render_template("forgot-password.html")

@app.route("/register")
def register():
    return render_template("register.html")

@app.route("/tryitnowpg")
def tryitnowpg():
    return render_template("tryitnow.html")

@app.route('/whatiscodercats')
def whatiscodercats():
    return redirect(url_for('home',_anchor='whatiscodercats'))

@app.route('/howitworks')
def howitworks():
    return redirect(url_for('home',_anchor='howitworks'))

@app.route('/tryitnow')
def tryitnow():
    return redirect(url_for('home',_anchor='tryitnow'))

@app.route('/contact')
def contact():
    return redirect(url_for('home',_anchor='contact'))


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


@app.route("/buttonActionthematic")
def button_action():
!pip install pandas
import pandas as pd


# Step 3: Latent Dirichlet Allocation (LDA) analysis of the data

import re
nltk.download('stopwords')
from nltk.corpus import stopwords

# LDA analysis of the data
# first clean the data
stopwords_list = set(stopwords.words('english'))

def pre_process_data(raw_text):
  #lower case all words
  pro_text = [text.lower() for text in raw_text.split()]
  # remove urls
  pro_text = [x for x in pro_text if 'http' not in x]

  # remove special characters and numbers
  pro_text = [re.sub(r"[^a-zA-Z]+", ' ', text) for text in pro_text]

  # remove stopwords
  pro_text = [x for x in pro_text if x not in stopwords_list]

  # remove short words < 2 characters
  pro_text = [x for x in pro_text if len(x) > 2]

  return pro_text

clean_data=[]
for tweet in data.iloc[:,0]:
  clean_tweet = pre_process_data(tweet)
  if clean_tweet != '':
    clean_data.append(clean_tweet)

clean_data[1]

from gensim.corpora import Dictionary, MmCorpus
# create dictionary of the words in the data

dictionary = Dictionary(clean_data)
print("Number of unique words :",len(dictionary))


#create bow of the data
corpus = [dictionary.doc2bow(text) for text in clean_data]

from gensim.models import LdaModel

# create LDA model
# first set some parameters
NUMTOPICS=10 # define how many topics to create from the data, experiment with diffent number here and examine the effect
NUMTERMS= 5 # define how many words to show per topic

#define the model
ldamodel = LdaModel(corpus, id2word= dictionary, num_topics= NUMTOPICS, passes=50)

# examine generated topic
for i in range(NUMTOPICS):
    topic = ldamodel.get_topic_terms(i, NUMTERMS)
    print([dictionary[pair[0]] for pair in topic])

!pip install pyLDAvis
# Visualise LDA results
import pyLDAvis.gensim
import gensim
pyLDAvis.enable_notebook()

vis = pyLDAvis.gensim.prepare(ldamodel, corpus, dictionary)
vis

p = pyLDAvis.gensim.prepare(ldamodel, corpus, dictionary)
pyLDAvis.save_html(p, 'lda.html')












from datetime import datetime
@app.context_processor
def inject_now():
    return {'now': datetime.utcnow()}

app.run(debug=True)
