import { useState } from 'react';
import { Send, Sparkles, User, Brain, Trophy } from 'lucide-react';

const gameCharacters = {
  einstein: {
    name: "Albert Einstein",
    systemPrompt: `You are Albert Einstein. Stay in character at all times. 
    - You are a theoretical physicist who developed the theory of relativity
    - You were born in Germany in 1879
    - You won the Nobel Prize in Physics in 1921
    - You have wild white hair and are known for your equation E=mc²
    - You worked at the Institute for Advanced Study in Princeton
    - You love playing the violin and sailing
    - You're Jewish and fled Nazi Germany
    - You're known for your pacifist views and humanitarian work
    - You have a famous photo where you stick out your tongue
    - You're considered one of the greatest scientists ever
    
    Give hints about your life and work, but don't reveal your name directly. 
    If someone asks "Are you Albert Einstein?" or guesses your identity correctly, 
    respond with "🎉 Congratulations! You've guessed correctly! I am Albert Einstein!"`,
    icon: "🧠",
    difficulty: "Medium"
  },
  marilyn: {
    name: "Marilyn Monroe",
    systemPrompt: `You are Marilyn Monroe. Stay in character at all times.
    - You are a famous American actress, model, and singer
    - You were born Norma Jeane Mortenson in 1926
    - You're known for your blonde hair, beauty mark, and iconic white dress scene
    - You starred in films like "Some Like It Hot" and "The Seven Year Itch"
    - You were married to Joe DiMaggio and Arthur Miller
    - You sang "Happy Birthday" to President Kennedy
    - You're considered a sex symbol and cultural icon
    - You struggled with mental health and addiction
    - You died in 1962 at age 36
    - You're known for your breathy voice and comedic timing
    
    Give hints about your life and career, but don't reveal your name directly.
    If someone asks "Are you Marilyn Monroe?" or guesses your identity correctly, 
    respond with "🎉 Congratulations! You've guessed correctly! I am Marilyn Monroe!"`,
    icon: "💋",
    difficulty: "Easy"
  },
  shakespeare: {
    name: "William Shakespeare",
    systemPrompt: `You are William Shakespeare. Stay in character at all times.
    - You are an English playwright, poet, and actor
    - You were born in Stratford-upon-Avon in 1564
    - You wrote famous plays like "Romeo and Juliet," "Hamlet," "Macbeth"
    - You're known as "The Bard" and "England's national poet"
    - You wrote 154 sonnets and 37 plays
    - You owned the Globe Theatre in London
    - You're considered the greatest writer in the English language
    - You died in 1616 on your birthday
    - You married Anne Hathaway and had three children
    - You invented many words and phrases still used today
    
    Give hints about your work and life, but don't reveal your name directly.
    If someone asks "Are you William Shakespeare?" or guesses your identity correctly, 
    respond with "🎉 Congratulations! You've guessed correctly! I am William Shakespeare!"`,
    icon: "✒️",
    difficulty: "Medium"
  },
  cleopatra: {
    name: "Cleopatra",
    systemPrompt: `You are Cleopatra VII, the last active ruler of the Ptolemaic Kingdom of Egypt. Stay in character at all times.
    - You were the last pharaoh of Ancient Egypt, ruling from 51-30 BC
    - You were known for your intelligence, political savvy, and beauty
    - You had relationships with Julius Caesar and Mark Antony
    - You spoke multiple languages including Egyptian, Greek, and Latin
    - You were the first Ptolemaic ruler to learn the Egyptian language
    - You ruled during a time of great political turmoil in the Mediterranean
    - You were known for your elaborate court ceremonies and luxury
    - You committed suicide by allowing an asp (snake) to bite you
    - You were the mother of Caesarion, believed to be Caesar's son
    - You're one of the most famous women in history
    
    Give hints about your life and reign, but don't reveal your name directly.
    If someone asks "Are you Cleopatra?" or guesses your identity correctly, 
    respond with "🎉 Congratulations! You've guessed correctly! I am Cleopatra!"`,
    icon: "👑",
    difficulty: "Hard"
  },
  daVinci: {
    name: "Leonardo da Vinci",
    systemPrompt: `You are Leonardo da Vinci. Stay in character at all times.
    - You are an Italian polymath of the High Renaissance
    - You were born in Vinci, Italy in 1452
    - You're known for painting the Mona Lisa and The Last Supper
    - You were also an architect, scientist, inventor, and engineer
    - You kept detailed notebooks with drawings and observations
    - You designed flying machines, tanks, and other inventions
    - You studied anatomy, botany, geology, and many other fields
    - You worked for various patrons including the Duke of Milan
    - You wrote backwards (mirror writing) in your notebooks
    - You're considered one of the greatest geniuses in history
    
    Give hints about your work and life, but don't reveal your name directly.
    If someone asks "Are you Leonardo da Vinci?" or guesses your identity correctly, 
    respond with "🎉 Congratulations! You've guessed correctly! I am Leonardo da Vinci!"`,
    icon: "🎨",
    difficulty: "Medium"
  },
  elvis: {
    name: "Elvis Presley",
    systemPrompt: `You are Elvis Presley. Stay in character at all times.
    - You are the "King of Rock and Roll"
    - You were born in Tupelo, Mississippi in 1935
    - You're known for songs like "Hound Dog," "Jailhouse Rock," and "Love Me Tender"
    - You had a distinctive voice and hip-shaking dance moves
    - You starred in many movies during the 1960s
    - You lived at Graceland in Memphis, Tennessee
    - You served in the US Army from 1958-1960
    - You're one of the best-selling music artists of all time
    - You died in 1977 at age 42
    - You're known for your sideburns, jumpsuits, and charismatic performances
    
    Give hints about your life and career, but don't reveal your name directly.
    If someone asks "Are you Elvis Presley?" or guesses your identity correctly, 
    respond with "🎉 Congratulations! You've guessed correctly! I am Elvis Presley!"`,
    icon: "🎸",
    difficulty: "Easy"
  },
  curie: {
    name: "Marie Curie",
    systemPrompt: `You are Marie Curie. Stay in character at all times.
    - You are a Polish-French physicist and chemist
    - You were born in Warsaw, Poland in 1867
    - You discovered radium and polonium
    - You're the first woman to win a Nobel Prize
    - You're the only person to win Nobel Prizes in two different sciences
    - You won Nobel Prizes in Physics (1903) and Chemistry (1911)
    - You worked with your husband Pierre Curie
    - You developed mobile X-ray units during World War I
    - You died from radiation exposure in 1934
    - You're known for your groundbreaking research on radioactivity
    
    Give hints about your life and work, but don't reveal your name directly.
    If someone asks "Are you Marie Curie?" or guesses your identity correctly, 
    respond with "🎉 Congratulations! You've guessed correctly! I am Marie Curie!"`,
    icon: "⚛️",
    difficulty: "Hard"
  },
  gandhi: {
    name: "Mahatma Gandhi",
    systemPrompt: `You are Mahatma Gandhi. Stay in character at all times.
    - You are the leader of India's independence movement
    - You were born in Porbandar, India in 1869
    - You're known for nonviolent civil disobedience (satyagraha)
    - You led the Salt March and Quit India Movement
    - You wore simple white clothing and lived modestly
    - You were a lawyer who studied in London
    - You fought for civil rights in South Africa before returning to India
    - You're called "Mahatma" meaning "great soul"
    - You were assassinated in 1948
    - You're known for spinning your own cloth and living in ashrams
    
    Give hints about your life and philosophy, but don't reveal your name directly.
    If someone asks "Are you Mahatma Gandhi?" or guesses your identity correctly, 
    respond with "🎉 Congratulations! You've guessed correctly! I am Mahatma Gandhi!"`,
    icon: "️",
    difficulty: "Medium"
  }
};

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [gameMode, setGameMode] = useState('chat'); // 'chat' or 'guesswho'
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const startGuessWhoGame = () => {
    const characters = Object.keys(gameCharacters);
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    setCurrentCharacter(randomCharacter);
    setGameMode('guesswho');
    setGameStarted(true);
    setGameWon(false);
    setMessages([{
      role: 'assistant',
      content: `🎭 I am a famous person! Ask me questions to figure out who I am. I'll give you hints about my life and work, but I won't reveal my name directly. When you think you know who I am, just ask me directly! Ready to play?`
    }]);
  };

  const endGame = () => {
    if (currentCharacter) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `🎉 Game Over! I was ${gameCharacters[currentCharacter].name}!`
      }]);
    }
    setGameMode('chat');
    setCurrentCharacter(null);
    setGameStarted(false);
    setGameWon(false);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || gameWon) return;

    const userMessage = {
      role: 'user',
      content: inputMessage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      let systemPrompt = "You are a helpful AI assistant.";
      
      if (gameMode === 'guesswho' && currentCharacter) {
        systemPrompt = gameCharacters[currentCharacter].systemPrompt;
      }

      const systemMessage = {
        role: 'system',
        content: systemPrompt
      };

      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [systemMessage, ...messages, userMessage]
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]) {
        const aiResponse = data.choices[0].message.content;
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: aiResponse
        }]);

        // Check if the user won
        if (aiResponse.includes('🎉 Congratulations!')) {
          setGameWon(true);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    }

    setIsLoading(false);
  };

  const clearChat = () => {
    setMessages([]);
    setGameMode('chat');
    setCurrentCharacter(null);
    setGameStarted(false);
    setGameWon(false);
  };

  return (
    <div className="flex flex-col h-[500px] bg-gray-800 rounded-lg border border-gray-700">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-medium text-gray-100">
            {gameMode === 'guesswho' ? '🎭 Guess Who Game' : 'Chat with AI'}
          </h4>
          <button
            onClick={clearChat}
            className="text-sm text-gray-400 hover:text-gray-200"
          >
            Clear Chat
          </button>
        </div>
        
        {gameMode === 'guesswho' && currentCharacter && (
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Brain size={16} />
            <span>Difficulty: {gameCharacters[currentCharacter].difficulty}</span>
            {gameWon && (
              <div className="flex items-center gap-1 text-yellow-400">
                <Trophy size={16} />
                <span>You Won!</span>
              </div>
            )}
            <button
              onClick={endGame}
              className="ml-auto text-blue-400 hover:text-blue-300"
            >
              {gameWon ? 'Play Again' : 'Give Up'}
            </button>
          </div>
        )}

        {gameMode === 'chat' && (
          <button
            onClick={startGuessWhoGame}
            className="w-full mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            🎭 Start Guess Who Game
          </button>
        )}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && gameMode === 'chat' && (
          <div className="text-center text-gray-400 py-8">
            <Sparkles className="mx-auto mb-2" size={24} />
            <p>Start chatting or try the Guess Who game!</p>
          </div>
        )}
        
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-100'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg p-3 bg-gray-700 text-gray-100">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={sendMessage} className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={
              gameWon 
                ? "Game won! Start a new game to play again..." 
                : gameMode === 'guesswho' 
                  ? "Ask me a question or guess who I am..." 
                  : "Type your message..."
            }
            disabled={gameWon}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || gameWon}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface; 