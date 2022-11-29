# Basic ticket workflow design
### Assignment
Create a ticket workflow sample application which allows users to modify the
state of the ticket.
### DB
No restriction on choice of database
### Backend
Node JS
No restriction of frameworks and ORM
Typescript preferred
### Frontend
React JS
Typescript preferred

Any boilerplate can be used for the project. Open source libraries are allowed

Example states - open, in progress, code review , closed

### Requirements
1) Opening a link {{host}}/tickets/:ticketId on browser should open the
above prototype page.
2) The page should show a ticket number and current state of the ticket
in the dropdown
3) In this simpler version of workflow, the state of a ticket can only be
changed to previous or next state. There cannot be multiple
previous/next states.
For eg.
“open” can only be moved to “in progress”
“in progress” can be moved to “open” or “code review”
4) The states can be preloaded in the database.
