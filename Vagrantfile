# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty32"
  
  config.vm.provision :shell, path: "provision.sh"
  
  config.vm.synced_folder ".", "/vagrant", :owner => "www-data", :mount_options => [
    "dmode=777","fmode=777", "umask=0000","dmask=0000","fmask=0000"]
  
  config.vm.network :private_network, ip: "192.168.250.254"
  
  
end
