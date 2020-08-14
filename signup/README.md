This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instruction

In the project directory, you can run:

### `npm install` or `yarn`

to install dependencies

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Notes about development

It was difficult to determine the correct font sizes, paddings, and margins so they may be off.

I ran axe for web accessiblity testing against the page and it called out the color of the submit button as a serious issue because of the contrast between the foreground and background color. It recommended that the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds.

I also ran lighthouse against it and since I did not optimize the build with code splitting the performance rating was low however its accessibilty score was 95 best practices 100 seo 100 and has some deficits in terms of PWA but then again I did not address this as it was not in the scope of the assignment.

I like using utility first approach to css styling. In the past I have used bootstrap utility classes but decided to try out TailwindCSS for this project [https://tailwindcss.com/](https://tailwindcss.com/)
