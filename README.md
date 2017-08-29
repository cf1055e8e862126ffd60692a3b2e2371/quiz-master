# Quiz-Master

### Requirements

- Ruby 2.3.4+
- Node.js 8.1.4+
- PostgreSQL
- Bundler
- yarn

### Getting Started

1. Install libraries

```
$ bundle install --path /vendor/bundle
$ yarn install
```

2. Start PostgreSQL server

3. Create databases

```
$ bundle exec rake db:create
```

4. Create tables

```
$ ./bin/rails db:migrate
```

5. Webpacking

```
$ ./bin/webpack
```

6. Start server

```
$ bundle exec rails s
```

7. Connect these urls by your web browser
  - http://localhost:3000/manage (Manage Page)
  - http://localhost:3000/quiz (Quiz Page)


### Development

- Start rails & webpack-dev-server

```
$ bundle exec foreman start
```

- Test ruby codes

```
$ bundle exec rspec
```

- Test JavaScript codes

```
$ yarn test
```

- Run eslint

```
$ yarn run lint
```
