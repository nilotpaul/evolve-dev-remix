import Heading from '../ui/Heading';

const About = () => {
  return (
    <section className='prose max-w-3xl text-center dark:prose-invert'>
      <Heading
        classNames={{
          h1: 'text-center mx-auto text-2xl font-bold roboto-mono-500',
        }}
      >
        About Us
      </Heading>

      <p className='roboto-mono-500 mt-16 leading-loose'>
        Focus On Your Vision And Leave The Development Complexities To Us. EvolveDev&apos;s
        Streamlined Approach Ensures Efficient Project Execution, Clear Communication, And Timely
        Delivery.
      </p>
    </section>
  );
};

export default About;
