import styles from './experience.module.css'

export default function Experience(){
    return (
        <>
          <div className={styles.grid_container}>
            <h1>My Experience:</h1>
            <div className={styles.Exp1}>
                <h3>American Systems Internship</h3>
                <p>
                    This job was in Aerospace, and I walked in the door on the first day not knowing what YAW meant. I worked every day not just to do what
                    was expected of me, but also to learn how to contribute on my own. That took a lot of asking questions and a lot of finding things out 
                    for myself, but by the end of my time there I could tell you exactly how those helicopters were flying. Beyond just gaining experience
                    working on real software, I learned how to work in a field that I wasn't familiar with and fight through the confusion to become a 
                    contributing member of the team. 
                </p>
            </div>
            <div className={styles.Exp2}>
                <h3>Chess Engine</h3>
                <p>
                    This is a personal project of mine, and the most ambitious project that I work on currently. I'm writing a Chess Engine, from scratch, 
                    in C++. This is just a passion project, but it's taught me a lot about optimization, learning unfamiliar algorithms and adjusting them
                    to fit into my own code, and about how important thorough testing can be. 
                </p>
            </div>
            <div className={styles.Exp3}>
                <h3>Password Cracker</h3>
                <p>
                    Though the name may sound a little nefarious, this was a project for my Network Security class that I am particularly proud of. The code 
                    attempts to break password encryption through an Educated Guess Brute Force model, which learns from a dataset of common passwords and a 
                    dataset of english words to iteratively generate words or combinations of words based on letter frequencies, looking back in the guess 
                    string a variable number of places to create better guesses at what the next letter could be. 
                </p>
            </div>
          </div>
        </>
    )
}