import Feed from "@components/Feed"
import Card from "@components/Card"

const Home = () => {

  const isUserLoggedIn = true
  return (
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover and Share 
            <br className="max-md:hidden" />
            <span className="orange_gradient 
            text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Promptopia is an open-source AI prompting tool for the modern workd to discover, create and share their creative prompts
        </p>

        <Feed isUserLoggedIn={isUserLoggedIn}/> 
        <div>
          {/* My design and components */}
        <div className="flex">
          {isUserLoggedIn ? (
            <div>
              <Card title='US30 Index hits all-time highs' 
                    description='Monday morning saw US markets on a steady rise backed by US30 bull run'
                    imageUrl='/assets/images/us30.png'
              />
              <Card title='Amazon, Google, Meta report record earnings' 
                    description='Breakthroughs in AI and Machine Learning have propelled big tech to the lead'
                    imageUrl='/assets/images/gam2.png'
              />
              <Card title='Elon Musk unveils the new CyberTruck' 
                    description='Musk showcased new and improved features for AutoPilotX and SmartConnect on the new model'
                    imageUrl='/assets/images/elon.png'
              />
            </div>
          ) : (
            <div>
              <p className="desc">Must sign in to see the latest</p>
            </div>
          )}
        </div>
        </div>
      </section>
  )
}

export default Home

