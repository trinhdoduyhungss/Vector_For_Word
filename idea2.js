let docA = "Tôi yêu em ấy"
let docB = "Tôi thương em ấy"

let bowA = docA.split(" ")
let word_dict = docA.split(" ")
let bowB = docB.split(" ")
let worddicA = {}
let worddicB = {}

for(let word in bowB){word_dict.push(bowB[word])}
for(let word in word_dict){worddicA[word_dict[word]]=0; worddicB[word_dict[word]]=0}
for(let word in bowA){worddicA[bowA[word]]+=1}
for(let word in bowB){worddicB[bowB[word]]+=1}

function compute_tf(word_dict, bow){
    let tf_dict = {}
    let bow_count = bow.length
    for(let word in word_dict){
        tf_dict[word] = word_dict[word]/bow_count
    }
    return tf_dict
}

function compute_idf(doc_list){
    let idf_dict = {}
    
    let N = doc_list.length

    for(let word in doc_list[0]){idf_dict[word]=0}

    for(let doc in doc_list){
        for(let word in doc_list[doc]){
            if(doc_list[doc][word] > 0){
                idf_dict[word] += 1
            }
        }
    }

    for(let word in idf_dict){
        idf_dict[word] = Math.log(N/idf_dict[word])
    }
    
    return idf_dict
}

function compute_TFIDF(tf_bow, idfs){
    let tfidf = {}
    for(let word in tf_bow){
        tfidf[word] = tf_bow[word]*idfs[word]
    }
    return tfidf
}

let tf_bowA = compute_tf(worddicA, bowA)
let tf_bowB = compute_tf(worddicB, bowB)

let idfs = compute_idf([worddicA, worddicB])

let tfidf_bowA = compute_TFIDF(tf_bowA, idfs)
let tfidf_bowB = compute_TFIDF(tf_bowB, idfs)

console.table([tfidf_bowA, tfidf_bowB])
