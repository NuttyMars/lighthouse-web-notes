## Setting up a blog template in Rails
All steps and details in the [guide here:](https://guides.rubyonrails.org/v4.2/)

1. rails new blog
- This will create a Rails application called Blog in a blog directory and install the gem dependencies that are already mentioned in Gemfile using bundle install

2. cd blog

3. bin/rails server (default)
- starts the rails server
-> for Vagrant, use: bin/rails server -b 0.0.0.0

4. bin/rails generate controller welcome index
- generates a controller for the index
- **A controller's purpose is to receive specific requests for the application**
  - Rails will create several files and a route for you:
  ```r
    create  app/controllers/welcome_controller.rb
    route  get 'welcome/index'
    invoke  erb
    create    app/views/welcome
    create    app/views/welcome/index.html.erb
    invoke  test_unit
    create    test/controllers/welcome_controller_test.rb
    invoke  helper
    create    app/helpers/welcome_helper.rb
    invoke  assets
    invoke    coffee
    create      app/assets/javascripts/welcome.js.coffee
    invoke    scss
    create      app/assets/stylesheets/welcome.css.scss
  ```
5. Edit the `app/views/welcome/index.html.erb` view to add what to display on the page
- .erb is for the HTML template being used
- **A view's purpose is to display this information in a human readable format**
**!!t is the controller, not the view, where information is collected**

6. Open the file `config/routes.rb` and uncomment `root 'welcome#index'`
- `root 'welcome#index'` tells Rails to map requests to the root of the application to the welcome controller's index action and `get 'welcome/index'` tells Rails to map requests to http://localhost:3000/welcome/index to the welcome controller's index action
- **Routing decides which controller receives which requests. Often, there is more than one route to each controller, and different routes can be served by different actions.**

7. Inside `config/routes.rb` add code `resources :articles` above the root code from the previous step
- this tells Rails to create an 'articles' resource
- If you run bin/rake routes, you'll see that it has defined routes for all the standard RESTful actions
  ```
  Prefix Verb           URI Pattern                 Controller#Action
      articles GET      /articles(.:format)           articles#index
               POST     /articles(.:format)           articles#create
   new_article GET      /articles/new(.:format)       articles#new
  edit_article GET      /articles/:id/edit(.:format)  articles#edit
       article GET      /articles/:id(.:format)       articles#show
               PATCH    /articles/:id(.:format)       articles#update
               PUT      /articles/:id(.:format)       articles#update
               DELETE   /articles/:id(.:format)       articles#destroy
          root GET      /                             welcome#index
  ```

8. Define `articles/new`
- With the route already defined, requests can now be made to /articles/new in the application (but will get an error for now)

9. bin/rails generate controller articles

10. open `app/controllers/articles_controller.rb` and add inside the empty class:
```ryby
  def new
  end
```
- this creates an action for `new`
- **Each action's purpose is to collect information to provide it to a view**

11. create a new file at `app/views/articles/new.html.erb` and add content to be displayed

12. create a form inside `app/views/articles/new.html.erb`
```ruby
<%= form_for :article, url: articles_path do |f| %>
  <p>
    <%= f.label :title %><br>
    <%= f.text_field :title %>
  </p>
 
  <p>
    <%= f.label :text %><br>
    <%= f.text_area :text %>
  </p>
 
  <p>
    <%= f.submit %>
  </p>
<% end %>
```
- The `articles_path` helper tells Rails to point the form to the URI Pattern associated with the articles prefix; and the form will (by default) send a POST request to that route. This is associated with the create action of the current controller

13. add a create action inside `app/views/articles/new.html.erb`
```ruby
def create
  render plain: params[:article].inspect
end
```
- this will display the parameters of :article, which in this case are the contents of the form returned as 
`{"title"=>"input content", "text"=>"input content"}`

14. create an article model: `bin/rails generate model Article title:string text:text`
- With that command we told Rails that we want a Article model, together with a title attribute of type string, and a text attribute of type text. Those attributes are automatically added to the articles table in the database and mapped to the Article model.
- **A model will translate the information to DB structure via Active Record**

15. open `db/migrate/20210106013822_create_articles.rb`(the number will be different, because migration filenames include a timestamp to ensure that they're processed in the order that they were created)
- inside it is a migration
- **Migrations are Ruby classes that are designed to make it simple to create and modify database tables**

16. use a rake command to run the migration: `bin/rake db:migrate`
- Rails will execute this migration command and tell you it created the Articles table

17. set up to save the form data to the DB: inside `app/controllers/articles_controller.rb` change the create method to
```ruby
  def create
    #this creates a new DB entry
    @article = Article.new(article_params)
 
    #this saves the entry to the DB
    @article.save
    #this redirects the user to the show action
    redirect_to @article
  end

  #whitelists our controller parameters to prevent wrongful mass assignment
  private
  def article_params
    params.require(:article).permit(:title, :text)
  end
```

18. show the newly created article: add the show method inside `app/controllers/articles_controller.rb`
```ruby
def show
    @article = Article.find(params[:id])
  end
```
- route /articles/:id

19. add `index` method inside controller to display all articles:
```ruby
def index
    @articles = Article.all
end
```
- route /articles

20. add link to articles on index page:
```ruby
<%= link_to 'My Blog', controller: 'articles' %>
```
- the link_to method is one of Rails' built-in view helpers. It creates a hyperlink based on text to display and where to go - in this case, to the path for articles

21. add validation inside `app/models/article.rb`
```ruby
  validates :title, presence: true,
                    length: { minimum: 5 }
```

22. add conditional in create method to only save article if the validation above returns true
```ruby
  if @article.save
    redirect_to @article
  else
    render 'new'
  end
```

23. change articles/new view to include any error messages coming from the validation
```ruby
  <% if @article.errors.any? %>
    <div id="error_explanation">
      <h2>
        <%= pluralize(@article.errors.count, "error") %> prohibited
        this article from being saved:
      </h2>
      <ul>
        <% @article.errors.full_messages.each do |msg| %>
          <li><%= msg %></li>
        <% end %>
      </ul>
    </div>
  <% end %>
```

24. add `edit` action to articles controller
```ruby
def edit
  @article = Article.find(params[:id])
end
```

25. create `edit` view
-> the first line of the form should be `<%= form_for :article, url: article_path(@article), method: :patch do |f| %>`
- The method: :patch option tells Rails that we want this form to be submitted via the PATCH HTTP method which is the HTTP method you're expected to use to update resources according to the REST protocol.

26. add `update` action to articles controller
```ruby
def update
  @article = Article.find(params[:id])
 
  if @article.update(article_params)
    redirect_to @article
  else
    render 'edit'
  end
end
```
- the order for the actions is : index, show, new, edit, create, update, destroy
- these all need to be above any private methods defined

27. define the form used in articles/new and articles/edit views as partial (_form.html.erb) -> copy theform code into its own file and include it in the new and edit views with
`<%= render 'form' %>`

28. add destroy action to controller
```ruby
def destroy
  @article = Article.find(params[:id])
  @article.destroy
 
  redirect_to articles_path
end
```
- we don't need to add a view for this action since we're redirecting to the index action

(next steps include creating comments and connecting them to articles, see full guide linked at top)
