import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto my-20 px-6'>
            <h2 className='text-center text-4xl font-bold text-gray-600 my-5'>Q/A Section</h2>

            <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                    <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                        <span>What is Context API?</span>
                        <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-1" class="" aria-labelledby="accordion-collapse-heading-1">
                    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Context provides a way to pass data through the component tree without having to pass props down manually at every level. The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it.</p>
                    </div>
                </div>
                <h2 id="accordion-collapse-heading-2">
                    <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                        <span>What is semantic tag?</span>
                        <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Semantic tags define the purpose of the element. By using semantic markup, we help the browser understand the meaning of the content instead of just displaying it. Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the tag is immediately recognized by the browser as some type of coding language. In HTML, for example, the h1 element is a semantic element, which gives the text it wraps around the role (or meaning) of "a top level heading on your page."</p>
                    </div>
                </div>
                <h2 id="accordion-collapse-heading-3">
                    <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                        <span>What is the difference between inline, block and inline-block element?</span>
                        <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Inline elements don’t start on a new line, they appear on the same line as the content and tags beside them. When it comes to margins and padding, browsers treat inline elements differently. You can add space to the left and right on an inline element, but you cannot add height to the top or bottom padding or margin of an inline element. <br />
                        A block element always starts on a new line, and fills up the horizontal space left and right on the web page. You can add margins and padding on all four sides of any block element — top, right, left, and bottom. <br />
                        Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. You’ll have to declare display: inline-block in your CSS code.
One common use for using inline-block is for creating navigation links horizontally.
                        </p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;