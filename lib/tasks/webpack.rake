namespace :webpack do
  desc "watch file changes"
  task run: :environment do
    sh('./bin/webpack-dev-server');
  end
end
