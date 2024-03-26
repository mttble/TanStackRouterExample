import { Button } from './ui/button';
import { Input } from './ui/input';

function Body() {
    return (
      <div style={{ paddingTop: '20px', paddingBottom:'20px' }}>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to the Platform
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              The complete solution for building, deploying, and iterating on the web.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="space-y-2">
              <Input placeholder="Enter your email" type="email" />
              <Button type="submit">Sign Up</Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Enter your email to get started with the Platform.
            </p>
          </div>
        </div>
      </div>
    </section>
      </div>
    );
  }
  
  export default Body;