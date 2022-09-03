# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "generic/alpine316"

  config.vm.usable_port_range = 8000..8999
  config.vm.network "forwarded_port", guest: 8282, host: 8282, auto_correct: true

  config.vm.synced_folder ".", "/vagrant"

  if Vagrant.has_plugin?("vagrant-timezone")
    config.timezone.value = "America/Bahia"
  end

  config.vm.hostname = "FILMES-APP"

  config.vm.provider :virtualbox do |vb|
    vb.name = config.vm.hostname
    vb.memory = 1024
    vb.cpus = 1
  end

  config.vm.provision "shell", inline: <<-SHELL
    # In case of connectivity issues with the apk repos, change the mirrors in '/etc/apk/repositories'. Faster connections may be available.
    # https://wiki.alpinelinux.org/wiki/Package_management
    # https://mirrors.alpinelinux.org/#mirror33

    echo '######################## Updating Packages Repository #########################'
    echo 'https://mirror.uepg.br/alpine/v3.16/main\nhttps://mirror.uepg.br/alpine/v3.16/community' > /etc/apk/repositories

    echo '########################## Updating Packages library ##########################'
    apk update

    echo '########################### Setting up System Time ############################'
    apk add --no-cache tzdata
    cp /usr/share/zoneinfo/America/Bahia /etc/localtime
    echo "America/Bahia" > /etc/timezone
    apk del tzdata

    echo '############################## Installing Nodejs ##############################'
    apk add --no-cache --update nodejs

    echo '############################### Installing NPM ################################'
    curl -L https://www.npmjs.com/install.sh | npm_install="8.19.1" sh

    echo '########################### Starting custom script ############################'
    su - vagrant -c '/vagrant/vagrant.bootstrap.sh'
  SHELL
end
